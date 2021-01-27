create
    definer = anhnd9@localhost procedure createNewUser(IN fullName varchar(50), IN email varchar(50),
                                                       IN phoneNumber varchar(13), IN gender int,
                                                       IN password varchar(255), IN createdAt timestamp,
                                                       IN updatedAt timestamp, IN idRole int)
BEGIN
    insert into users(fullName, email, phoneNumber, gender, password, createdAt, updatedAt, idRole)
    values (fullName, email, phoneNumber, gender, password, createdAt, updatedAt, idRole);

end;

create
    definer = anhnd9@localhost procedure getRoleById(IN id int)
BEGIN
    select * from roles where roles.id = id;

END;

create
    definer = anhnd9@localhost procedure gettingAllReports()
begin
    select rp.id, rp.title, u.fullName
    from reports as rp,
         users as u
    where rp.idUser = u.id;
end;

create
    definer = anhnd9@localhost procedure gettingDetailReport(IN id_report int)
begin
    select * from reportDetail as rpd where rpd.idReport = id_report;

end;




