using System.Collections.Generic;
using System.Threading.Tasks;
using Quiklease.API.Models;

namespace Quiklease.API.Data
{
    public interface IQuikleaseRepository
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         Task<bool> SaveAll();
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(int id);

         Task<IEnumerable<Listing>> GetListings();
         Task<IEnumerable<Listing>> GetUserListings(int userid);
         Task<Listing> GetListing(int id);
         Task<Photo> GetPhoto(int id);
         Task<Photo> GetMainPhotoForListing(int listinId);
         
    }
}