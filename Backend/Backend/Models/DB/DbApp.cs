using Microsoft.EntityFrameworkCore;

namespace Backend.Models.DB
{
    public class DbApp : DbContext
    {
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<FoodProduct> Products { get; set; }
        public virtual DbSet<OrderHistory> Histories { get; set; }
        public DbApp(DbContextOptions<DbApp> options)
            : base(options) => Database.EnsureCreated();
    }
}
