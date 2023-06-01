using Backend.Models.DB;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api")]
    public class ProductController : Controller
    {
        private DbApp _dbApp;
        public ProductController(DbApp dbApp)
        {
            this._dbApp=dbApp;
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
        public async Task<IActionResult> Index([FromBody] string place)
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
        public async Task<IActionResult> CreateOrder([FromBody] OrderHistory orderHistory)
        {
            try
            {
                await _dbApp.Histories.AddAsync(orderHistory);
                await _dbApp.SaveChangesAsync();

                return Ok(new{isOrder=true, id=orderHistory.Id});
            }
            catch (Exception e)
            {
                return BadRequest(new { message = e.Message });
            }
        }
    }
}
