using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Quiklease.API.Models;

namespace Quiklease.API.Data
{
    public class QuikleaseRepository : IQuikleaseRepository
    {
        private readonly DataContext _context;
        public QuikleaseRepository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Listing> GetListing(int id)
        {
            var listing = await _context.Listings
            .Include(l => l.Photos)
            .FirstOrDefaultAsync(l => l.Id == id);
            return listing;
        }

        public async Task<IEnumerable<Listing>> GetListings()
        {
            var listings = await _context.Listings
            .Include(l => l.Photos)
            .OrderByDescending(l => l.PostedDate)
            .ToListAsync();
            return listings;
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users
            .Include(u => u.Listings)
            .ThenInclude(l => l.Photos)
            .FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }

        public async Task<IEnumerable<Listing>> GetUserListings(int userid)
        {
            var listings = await _context.Listings
            .Include(l => l.Photos)
            .Where(l => l.UserId == userid)
            .ToListAsync();
            return listings;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users
            .Include(u => u.Listings)
            .ThenInclude(l => l.Photos)
            .OrderByDescending(u => u.FullName)
            .ToListAsync();
            return users;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}