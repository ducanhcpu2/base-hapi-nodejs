
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