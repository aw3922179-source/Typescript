var role;
(function (role) {
    role["Admin"] = "admin123";
    role["Organizer"] = "organizer123";
    role["Exhibitor"] = "exhibitor123";
})(role || (role = {}));
var status;
(function (status) {
    status[status["Active"] = 0] = "Active";
    status[status["Pending"] = 1] = "Pending";
    status[status["Cancelled"] = 2] = "Cancelled";
})(status || (status = {}));
const currentrole = role.Exhibitor;
console.log(currentrole, status.Active);
export {};
//# sourceMappingURL=enum.js.map