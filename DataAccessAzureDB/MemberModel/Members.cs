using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DataAccessAzureDB.MemberModel
{
   public class Members
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(100)]
        public string MemberName { get; set; }
        [Required]
        [MaxLength(300)]
        public string MemberBio { get; set; }
        [Required]
        public int MemberAge { get; set; }
       
    }
}
