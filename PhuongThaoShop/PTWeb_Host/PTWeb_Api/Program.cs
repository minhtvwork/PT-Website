using Microsoft.EntityFrameworkCore;
using PTWeb_Api.AppDbContext;
using PTWeb_Api.Repository.IRepository;
using PTWeb_Api.Repository;
using PTWeb_Api.Service.IService;
using PTWeb_Api.Service;
using PTWeb_Api.Services.IServices;
using PTWeb_Api.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(
    builder.Configuration.GetConnectionString("DefaultConnection")
    ));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
#region Đăng ký DI
builder.Services.AddScoped<ApplicationDbContext, ApplicationDbContext>();
//builder.Services.AddTransient<IRamRepository, RamRepository>();
//builder.Services.AddTransient<ICardVGARepository, CardVGARepository>();
//builder.Services.AddTransient<ICpuRepository, CpuRepository>();
//builder.Services.AddTransient<IHardDriveRepository, HardDriveRepository>();
//builder.Services.AddTransient<ISanPhamGiamGiaRepository, SanPhamGiamGiaRepository>();
//builder.Services.AddTransient<IGiamGiaRepository, GiamGiaRepository>();
//builder.Services.AddTransient<IRoleRepository, RoleRepository>();
//builder.Services.AddTransient<IColorRepository, ColorRepository>();
//builder.Services.AddTransient<IScreenRepository, ScreenRepository>();
builder.Services.AddTransient<IProductDetailRepository, ProductDetailRepository>();
//builder.Services.AddTransient<IManufacturerRepository, ManufacturerRepository>();
//builder.Services.AddTransient<IProductRepository, ProductRepository>();
//builder.Services.AddTransient<ISerialRepository, SerialRepository>();
//builder.Services.AddTransient<IImageRepository, ImageRepository>();
builder.Services.AddTransient<IVoucherRepository, VoucherRepository>();
//builder.Services.AddTransient<IUserRepository, UserRepository>();
//builder.Services.AddTransient<ICartRepository, CartRepository>();
//builder.Services.AddTransient<ICartDetailRepository, CartDetailRepository>();
//builder.Services.AddTransient<IBillRepository, BillRepository>();
//builder.Services.AddTransient<IBillDetailRepository, BillDetailRepository>();
//builder.Services.AddTransient<ISendMailService, SendMailService>();
//builder.Services.AddTransient<IProductTypeRepository, ProductTypeRepository>();
//builder.Services.AddTransient<IGiamGiaHangLoatServices, GiamGiaHangLoatServices>();
//builder.Services.AddTransient<IBillService, BillService>();
//builder.Services.AddTransient<ICartService, CartService>();
//builder.Services.AddTransient<IPagingRepository, PagingRepository>();
//builder.Services.AddTransient<IUserService, UserService>();
//builder.Services.AddTransient<IImagesServies, ImagesServies>();
//builder.Services.AddTransient<IManagePostRepository, ManagePostRepository>();
#endregion

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.UseCors(t => t.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());


app.Run();
