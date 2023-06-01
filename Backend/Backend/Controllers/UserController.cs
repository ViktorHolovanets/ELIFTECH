using Backend.Models.DB;
using Backend.Models.Helpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api")]
    public class UserController : Controller
    {
        private AuthorizationHelper _authorizationHelper;
        private DbApp Db;
        public UserController(DbApp db, IConfiguration configuration)
        {
            _authorizationHelper = new AuthorizationHelper(configuration);
            Db = db;
        }
        [HttpPost("user")]
        public async Task<IActionResult> IndexAsync()
        {
            string? email = _authorizationHelper.GetEmailFromToken(HttpContext);
            if (email != null)
            {
                User? user = await Db.Users.FirstOrDefaultAsync(u => u.Email == email);

                return user != null ? Ok(user): BadRequest();
            }
            return BadRequest();
        }
    }
}
