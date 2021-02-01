
DELIMITER //

DROP PROCEDURE IF EXISTS gettingAllReports;
DROP PROCEDURE IF EXISTS gettingDetailReport;

create procedure gettingAllReports(IN pageOffset int, IN pageSize int)
begin
    select rp.id, rp.title, u.fullName
    from reports as rp,
         users as u
    where rp.idUser = u.id
    limit pageOffset,pageSize;
end;

create procedure gettingDetailReport(IN id_report int, IN pageOffset int, IN pageSize int)
begin
    select * from reportDetail as rpd where rpd.idReport = id_report limit pageOffset,pageSize;

end;



//

# DROP PROCEDURE createNewUser;
# DROP PROCEDURE createSubRole;
# DROP PROCEDURE getRoleById;
# DROP PROCEDURE gettingAllReports;
# DROP PROCEDURE gettingDetailReport;

delimiter //


create
    definer = root@localhost procedure createNewUser(IN fullName varchar(50), IN email varchar(50),
                                                       IN phoneNumber varchar(13), IN gender int,
                                                       IN password varchar(255), IN createdAt timestamp,
                                                       IN updatedAt timestamp, IN idRole int)
BEGIN
    insert into users(fullName, email, phoneNumber, gender, password, createdAt, updatedAt, idRole)
    values (fullName, email, phoneNumber, gender, password, createdAt, updatedAt, idRole);

end;

create
    definer = root@localhost procedure createSubRole(IN sub_role_name varchar(50), IN role_code varchar(50))
begin
    insert into subRoles(subRoleName, RoleCode) values (sub_role_name, role_code);
end;

create
    definer = root@localhost procedure getRoleById(IN id int)
BEGIN
    select * from roles where roles.id = id;

END;

create
    definer = root@localhost procedure gettingAllReports(IN pageOffset int, IN pageSize int)
begin
    select rp.id, rp.title, u.fullName
    from reports as rp,
         users as u
    where rp.idUser = u.id
    limit pageOffset,pageSize;
end;

create
    definer = root@localhost procedure gettingDetailReport(IN id_report int, IN pageOffset int, IN pageSize int)
begin
    select * from reportDetail as rpd where rpd.idReport = id_report limit pageOffset,pageSize;

end;

//

delimiter //

CREATE PROCEDURE saveToken(IN access_token varchar(255),IN id_user int)
begin
    if( select idUser from JWT where idUser = id_user  )then
        update JWT set token = access_token where idUser = id_user;

    else
        insert into JWT(token, idUser) VALUES (access_token,id_user);

    end if;
end;
//