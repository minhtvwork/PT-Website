
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PTWeb_Models.Entities
{
    [Table("User")]
    public class User 
    {
        [Key]
        public Guid Id { get; set; }    
        public string? Username { get; set; }    
        public string? PasswordHash { get; set; }
        public string? FullName { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Address { get; set; }
        public string? Email { get; set; } 
        public Guid RoleId { get; set; }
        public int Status { get; set; }
        public virtual Role? Role { get; set; }
        public virtual Cart? Cart { get; set; }
        public virtual ICollection<Bill>? Bills { get; set; }

    }
}
