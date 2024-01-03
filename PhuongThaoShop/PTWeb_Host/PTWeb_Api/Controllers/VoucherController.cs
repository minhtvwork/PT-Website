using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PTWeb_Api.Repository.IRepository;
using PTWeb_Models.Dto;
using PTWeb_Models.Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PTWeb_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class VoucherController : ControllerBase
    {
        private readonly IVoucherRepository _repository;
        public VoucherController(IVoucherRepository repository)
        {
            _repository = repository;
         
        }
        [AllowAnonymous]
        [HttpGet("GetAllVoucher")]
        public async Task<IActionResult> GetAllVoucher()
        {
            return Ok(await _repository.GetAllVouchers());
        }
        //[HttpPost("CreateVoucher")]
        //public async Task<IActionResult> CreateVoucher([FromBody] Voucher voucher)
        //{
        //    voucher.Id = Guid.NewGuid();
        //    if (await _repository.Create(voucher))
        //    {
        //        return Ok("Thêm thành công");
        //    }
        //    return BadRequest("Thêm thất bại");
        //}


        [HttpPost("CreateVoucher2")]
        public async Task<IActionResult> CreateVoucher2([FromBody] Voucher voucher)
        {
            voucher.Id = Guid.NewGuid();
            var response = await _repository.Create(voucher);

            if (response.IsSuccess)
            {
                return Ok(response);
            }

            return BadRequest(response);
        }



        [HttpPut("UpdateVoucher")]
        public async Task<IActionResult> UpdateVoucher(Voucher obj)
        {

            var response = await _repository.Update(obj);
            if (response.IsSuccess)
            {
                return Ok(response);
            }
            return BadRequest(response);
        }
        [HttpPut("UpdateSL")]
        public async Task<IActionResult> UpdateSLVoucher(string codeVoucher)
        {
            if (await _repository.UpdateSL(codeVoucher))
                return Ok();
            return BadRequest();

        }

        [HttpDelete("id")]
        public async Task<IActionResult> DeleteVoucher(Guid id)
        {
            if (await _repository.Delete(id))
            {
                return Ok("Xóa thành công");
            }
            return BadRequest("Xóa thất bại");

        }
        //[HttpGet("GetAllVoucherPGs")]
        //public IActionResult GetAllVoucherPGs(string? search, double? from, double? to, string? sortBy, int? page)
        //{
        //    _response.Result = _pagingRepository.GetAllVoucherPG(search, from, to, sortBy, page);
        //    _response.Count = _pagingRepository.GetAllVoucherPG(search, from, to, sortBy, page).Count();
        //    return Ok(_response);
        //}
    }
}
