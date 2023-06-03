using Microsoft.VisualBasic;

namespace Backend.Models.DB
{
    public class OrderHistory
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public User? User { get; set; }
        public List<Order>? Products { get; set; } = new List<Order>();
        public DateTime DateOrderTime { get; set; } = DateTime.Now;
        public bool IsBuy { get; set; } = false;
        public string Address { get; set; }
    }
}
