using PTWeb_Models.Dto;
using PTWeb_Models.Entities;

namespace PTWeb_Api.Repository.IRepository
{
    public interface IVoucherRepository
    {
        //Task<bool> Create(Voucher obj);
        Task<ResponseDto> Create(Voucher obj);
        Task<ResponseDto> Update(Voucher obj);
        Task<bool> Delete(Guid id);
        Task<bool> UpdateSL(string codeVoucher);
        Task<IEnumerable<Voucher>> GetAllVouchers();
        Task<Voucher> GetByCode(string codeVoucher);
        Task<bool> Duyet(Guid Id);
        Task<bool> HuyDuyet(Guid Id);
    }
}
