using Microsoft.EntityFrameworkCore;
using Quiklease.API.Models;

namespace Quiklease.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}
        
        public DbSet<Value> Values {get; set;}
    }
}