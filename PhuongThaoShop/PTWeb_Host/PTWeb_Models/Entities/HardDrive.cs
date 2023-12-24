﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PTWeb_Models.Entities
{
    [Table("HardDrive")]
    public class HardDrive
    {
        [Key]
        public Guid Id { get; set; }
        [MaxLength(50)]
        public string? Ma { get; set; }
        [MaxLength(100)]
        public string? ThongSo { get; set; }
        public int TrangThai { get; set; }
        public virtual ICollection<ProductDetail>? ProductDetails { get; set; }
    }
}
