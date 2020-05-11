
using Microsoft.EntityFrameworkCore;

using DataAccessAzureDB.MemberModel;
namespace DataAccessAzureDB
{
    public class PeopleContext : DbContext
    {
        public PeopleContext(DbContextOptions contextOptions) : base(contextOptions)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Person>(entity =>
            {
                entity.HasKey(e => e.Id);
                
                entity.Property(e => e.FirstName).IsRequired();
            });

            modelBuilder.Entity<Members>(entity =>
            {
                entity.HasKey(e => e.Id);
                
                entity.Property(e => e.MemberName).IsRequired();
            });
        }
        public DbSet<Person> Persons { get; set; }
        public DbSet<Members> Members { get; set; }
        public DbSet<WeatherForecast> WeatherForecasts { get; set; }
    }
}
