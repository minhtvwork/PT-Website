using PTWeb_Models.Entities;

namespace PTWeb_Models.Dto
{
    public class TokenDto
    {
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
    }
}