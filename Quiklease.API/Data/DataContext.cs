using Microsoft.EntityFrameworkCore;
using Quiklease.API.Models;

namespace Quiklease.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}
        
        public DbSet<Value> Values {get; set;}
        public DbSet<User> Users {get; set;}
        public DbSet<Listing> Listings {get; set;}
        public DbSet<Photo> Photos {get; set;}
        
    }
}