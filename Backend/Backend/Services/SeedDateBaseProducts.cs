using Backend.Models.DB;
using Newtonsoft.Json;


namespace Backend.Services
{
    public class SeedDateBaseProducts
    {
        private readonly HttpClient _httpClient;
        private readonly Random _random;

        public SeedDateBaseProducts(HttpClient httpClient)
        {
            _httpClient = httpClient;
            _random = new Random();
        }

        public async Task SeedAsync(DbApp context)
        {
            List<string> categories = new List<string>() { "Breakfast", "Seafood", "Arrabiata", "Chicken", "Beef" };
            int shopIterator = 1;

            foreach (var category in categories)
            {
                try
                {
                    await RequestApiProductAsync(category, $"Shop {shopIterator++}", context);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                }
            }
        }

        private async Task RequestApiProductAsync(string category, string shopName, DbApp context)
        {
            var baseAddress = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

            using (var response = await _httpClient.GetAsync(baseAddress + category))
            {
                if (response.IsSuccessStatusCode)
                {
                    var customerJsonString = await response.Content.ReadAsStringAsync();
                    var meals = JsonConvert.DeserializeObject<MealsResponse>(customerJsonString)?.Meals;

                    if (meals != null)
                    {
                        foreach (var meal in meals)
                        {
                            try
                            {
                                var product = new FoodProduct()
                                {
                                    Name = meal.strMeal,
                                    Poster = meal.strMealThumb,
                                    Price = Convert.ToDecimal(_random.NextDouble() * 99 + 1),
                                    PlaceOfPurchase = shopName
                                };

                                context.Products.Add(product);
                            }
                            catch (Exception e)
                            {
                                Console.WriteLine(e);
                            }
                        }

                        await context.SaveChangesAsync();
                    }
                }
            }
        }
    }

    public class MealsResponse
    {
        public List<Meal> Meals { get; set; }
    }

    public class Meal
    {
        public string strMeal { get; set; }
        public string strMealThumb { get; set; }
    }
}
