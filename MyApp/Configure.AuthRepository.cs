using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;
using ServiceStack;
using ServiceStack.Auth;
using ServiceStack.Configuration;

namespace MyApp
{
    [Priority(-80)] // Run before AppHost.Configure()
    public class ConfigureAuthRepository : IConfigureAppHost, IConfigureServices
    {
        public void Configure(IServiceCollection services)
        {
            services.AddSingleton<IAuthRepository>(new InMemoryAuthRepository()); //Store Authenticated Users in Memory
        }

        public void Configure(IAppHost appHost)
        {
            CreateUser(appHost.Resolve<IAuthRepository>(), 
                "admin@email.com", "Admin User", "p@55wOrd", roles:new[]{ RoleNames.Admin });
        }

        // Add initial Users to the configured Auth Repository
        public void CreateUser(IAuthRepository authRepo, string email, string name, string password, string[] roles)
        {
            if (authRepo.GetUserAuthByUserName(email) == null)
            {
                var newAdmin = new UserAuth { Email = email, DisplayName = name };
                var user = authRepo.CreateUserAuth(newAdmin, password);
                authRepo.AssignRoles(user, roles);
            }
        }
    }
}
