using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DataAccessAzureDB
{
    public class Person
    {
        [Key]        
        public int Id { get; set; }
        [Required]
        public int Age { get; set; }
        [Required]
        [MaxLength(30)]
        public string LastName { get; set; }
        [Required]
        [MaxLength(30)]
        public string FirstName { get; set; }
        [MaxLength(10)]
        public string Hobby { get; set; }
    }
}
