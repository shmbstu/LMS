using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LMS_Server.Models
{
    using System.Data.Entity;
    public class LmsDbContext : DbContext
    {
        public LmsDbContext() : base("DefaultConnection")
        {

        }

        public DbSet<Student> Students { get; set; }
    }
}