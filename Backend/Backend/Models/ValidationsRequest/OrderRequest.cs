using Backend.Models.DB;

namespace Backend.Models.ValidationsRequest
{
    public class OrderRequest
    {
        public List<Order>? Products { get; set; } = new List<Order>();
        public string? Address { get; set; }
        public string? Name { get; set; }
        public string? Phone { get; set; }
    }
}
