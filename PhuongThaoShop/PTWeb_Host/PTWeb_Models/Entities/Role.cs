
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PTWeb_Models.Entities
{
    [Table("Role")]
    public class Role
    {
        [Key]
        public Guid Id { get; set; } 
        public string? RoleName { get; set; }
        public int Status { get; set; }
        public virtual ICollection<User>? Bills { get; set; }


    }
}
