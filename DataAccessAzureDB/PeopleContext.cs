
using Microsoft.EntityFrameworkCore;

namespace DataAccessAzureDB
{
    public class PeopleContext : DbContext
    {
        public PeopleContext(DbContextOptions contextOptions) : base(contextOptions)
        {

        }
        public DbSet<Person> Persons { get; set; }
        public DbSet<WeatherForecast> WeatherForecasts { get; set; }
    }
}
