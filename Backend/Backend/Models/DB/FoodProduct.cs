namespace Backend.Models.DB
{
    public class FoodProduct
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Poster { get; set; }
        public string PlaceOfPurchase { get; set; }
    }

}
