enum role{
    Admin = 'admin123',
    Organizer = 'organizer123',
    Exhibitor = 'exhibitor123'
}
enum status{
    Active,
    Pending,
    Cancelled
}
const currentrole : role = role.Exhibitor;
console.log(currentrole,status.Active);