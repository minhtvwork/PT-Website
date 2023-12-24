using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PTWeb_Models.Entities
{
    [Table("ViDiem")]
    public class ViDiem
    {
        [Key]
        public Guid UserId { get; set; }
        public double TongDiem { get; set; }
        public double SoDiemDaDung { get; set; }
        public double SoDiemDaCong { get; set; }
        public int TrangThai { get; set; }
        public virtual User? User { get; set; }
        public virtual ICollection<LichSuTieuDiem>? LichSuTieuDiems { get; set; }
    }
}
