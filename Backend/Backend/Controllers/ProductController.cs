using Backend.Models.DB;
using Backend.Models.Helpers;
using Backend.Models.ValidationsRequest;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Backend.Controllers
{
    [Route("api")]
    public class ProductController : Controller
    {
        private DbApp _dbApp;
        private AuthorizationHelper _authorizationHelper;
        public ProductController(DbApp dbApp, IConfiguration configuration)
        {

            this._dbApp = dbApp;
            _authorizationHelper = new AuthorizationHelper(configuration);
        }
        [HttpPost("products")]
        public async Task<IActionResult> AllProducts()
        {
            try
            {
                var products = await _dbApp.Products.ToListAsync();

                return Ok(products);
            }
            catch (Exception e)
            {
                return BadRequest(new { message = e.Message });
            }
        }

        [HttpPost("category")]
        public async Task<IActionResult> GetCategory([FromBody] string place)
        {
            try
            {
                var products = await _dbApp.Products.Where(pt => pt.PlaceOfPurchase == place).ToListAsync();

                return Ok(products);
            }
            catch (Exception e)
            {
                return BadRequest(new { message = "Error" });
            }
        }
        [HttpPost("orders")]
        public async Task<IActionResult> CreateOrder([FromBody] OrderRequest order)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                string? email = _authorizationHelper.GetEmailFromToken(HttpContext);
                if (email != null)
                {
                    User? user = await _dbApp.Users.FirstOrDefaultAsync(u => u.Email == email);

                    if (user != null)
                    {
                        var orderHistory = new OrderHistory()
                        {
                            User = user,
                            Address = order.Address,
                            IsBuy = true
                        };
                        var productIds = order.Products?.ToArray();
                        foreach (var item in productIds)
                        {
                            orderHistory.Products?.Add(new Order()
                            {
                                Count = item.Count,
                                Product = _dbApp.Products?.FirstOrDefault(p => p == item.Product),
                            });
                        }
                        await _dbApp.Histories.AddAsync(orderHistory);
                        await _dbApp.SaveChangesAsync();

                        return Ok(new { isOrder = true, orderId = orderHistory.Id });
                    }
                }
                else
                {
                    // to do
                }
                return Ok(new { isOrder = false, orderId = "" });
            }
            catch (Exception e)
            {
                return BadRequest(new { message = e.Message });
            }
        }
        [HttpPost("history")]
        public async Task<IActionResult> GetHistory()
        {
            try
            {
                string? email = _authorizationHelper.GetEmailFromToken(HttpContext);
                if (email != null)
                {
                    User? user = await _dbApp.Users.FirstOrDefaultAsync(u => u.Email == email);

                    if (user != null)
                    {
                        var history = await _dbApp.Histories
                            .Include(h => h.Products)
                            .Where(h => h.User == user)
                            .Select(h => new
                            {
                                h.Id,
                                Products = h.Products.Select(p => new
                                {
                                    p.Id,
                                    Product = p.Product,
                                    p.Count
                                }),
                                h.Address,
                                h.DateOrderTime,
                                name = user.UserName,
                                phone = user.Phone
                            })
                            .ToListAsync();
                        return Ok(history);
                    }
                }
                return BadRequest();
            }
            catch (Exception e)
            {
                return BadRequest(new { message = e.Message });
            }
        }

    }
}
