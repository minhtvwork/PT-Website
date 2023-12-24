using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PTWeb_Models.Entities
{
    [Table("Color")]
    public class Color
    {
        [Key]
        public Guid Id { get; set; }
        [MaxLength(50)]
        public string? Ma { get; set; }
        [MaxLength(100)]
        public string? Name { get; set; }
        public int TrangThai { get; set; }
        public virtual ICollection<ProductDetail>? ProductDetails { get; set; }
    }
}
