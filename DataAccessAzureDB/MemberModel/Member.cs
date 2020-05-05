using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DataAccessAzureDB.MemberModel
{
   public class Member
    {
        [Key]
        public int Id { get; set; }
        public string MemberName { get; set; }
        public string MemberBio { get; set; }
        public int MemberAge { get; set; }
       
    }
}
