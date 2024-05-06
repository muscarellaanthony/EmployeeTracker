-- Connect to the database
\c employees

INSERT INTO department
    (name)
VALUES
  ('Parks and Recreation'),
       ('Police'),
       ('Fire'),
       ('Sewage'),
       ('Library'),
       ('Education'),
       ('Public Works'),
       ('Health'),
       ('City Council');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Director of Parks and Rec', 100000, 1),
        ('Deputy Director of Parks and Rec', 90000, 1),
        ('Chief of Police', 100000, 2),
        ('Fire Chief', 100000, 3),
        ('Director of Sewage', 100000, 4),
        ('Library Director', 100000, 5),
        ('Library Deputy Director', 90000, 5),
        ('Director of Education', 100000, 6),
        ('Public Works Director', 10000, 7),
        ('Health Department Director', 100000, 8),
        ('Director of Animal Control', 100000, 9),
        ('Animal Controll Officer', 10000, 9),
        ('City Planner', 80000, 9),
        ('Park Ranger', 40000, 9),
        ('Administrator', 80000, 1),
        ('Security Guard', 80000, 9),
        ('City Manager', 120000, 9),
        ('Assistant City Manager', 110000, 9),
        ('Permits Security', 80000, 1),
        ('Office Manager', 80000, 9),
        ('City Attorney Assitant', 80000, 9),
        ('Councilman', 80000, 9),
        ('Court Stenographer', 80000, 9),
        ('Head of DMV', 90000, 9),
        ('Police Officer', 80000, 2),
        ('Sanitation Worker', 80000, 4),
        ('Maintenance Worker', 80000, 7);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Chris', 'Traeger', 18, 1),
        ('Sir Benjamin', 'Wyatt', 18, 2),
        ('Ron', 'Swanson', 1, 3),
        ('Leslie', 'Knope', 2, NULL),
        ('Hugh', 'Trumple', 3, NULL),
        ('Al', 'Connor', 4, NULL),
        ('Joe', 'Fantringham', 5, NULL),
        ('Tammy', 'Swanson', 7, 2),
        ('Marlene', 'Griggs-Knope', 8, 2),
        ('Harold', 'Bauer', 9, 2),
        ('Ann', 'Perkins', 10, 2),
        ('April', 'Ludgate', 11, 2),
        ('Eugene', 'Burnout', 12, NULL),
        ('Harris', 'Burnout', 12, NULL),
        ('Brett', 'Burnout', 12, 11),
        ('Mark', 'Brendanawicz', 13, 2),
        ('Carl', 'Lorthner', 14, 2),
        ('Tom', 'Haverford', 15, 4),
        ('Sir Andrew Maxwell', 'Dwyer', 16, 2),
        ('Donna', 'Meagle', 19, 4),
        ('Gerald', 'Gergich', 20, 4),
        ('Garry', 'Gergich', 20, 4),
        ('Jerry', 'Gergich', 20, 4),
        ('Larry', 'Gergich', 20, 4),
        ('Lenny', 'Gergich', 20, 4),
        ('Terry', 'Gergich', 20, 4),
        ('Mailman', 'Gergich', 20, 4),
        ('Kyle', 'Client', 21, 4),
        ('Jeremy', 'Jamm', 22, 4),
        ('Douglass', 'Howser', 22, 4),
        ('Ethel', 'Beavers', 23, 2),
        ('Dawn', 'Krink', 24, 2),
        ('Len', 'Hugeff', 25, 5),
        ('Dewey', 'Burnout', 26, 7),
        ('George', 'Williams', 27, 9),
        ('David', 'Sanderson', 25, 5);