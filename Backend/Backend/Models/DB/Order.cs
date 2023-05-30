namespace Backend.Models.DB
{
    public class Order
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public FoodProduct Product { get; set; } 
        public int Count { get; set; } = 1;
    }
}
