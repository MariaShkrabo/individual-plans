INSERT INTO public.faculties 
VALUES (1, 'ФИТР', 'Факультет информацтионных технологий и робототехники'),
(2, 'ФГДЭ', 'Факультет горного дела и инженерной экологии'),
(3, 'МСФ', 'Машиностроительный факультет'),
(4, 'МТФ', 'Механико-технологический факультет'),
(5, 'ФММП', 'Факультет маркетинга, менеджмента, предпринимательства'),
(6, 'ЭФ', 'Энергетический факультет'),
(7, 'ФТУГ', 'Факультет технологий управления и гуманитаризации'),
(8, 'ИПФ', 'Инженерно-педагогический факультет'),
(9, 'ФЭС', 'Факультет Энергетического строительства'),
(10, 'АФ', 'Архитектурный факультет'),
(11, 'СФ', 'Строительный факультет'),
(12, 'ПСФ', 'Приборостроительный факультет'),
(13, 'ФТК', 'Факультет транспортных коммуникаций'),
(14, 'ВТФ', 'Военно-технический факультет')



INSERT INTO public.cathedras
VALUES (1, 'ПОИСиТ', 'Программное обеспечение информационных систем и технологий', 'Полозков', 'Юрий', 'Владимирович', 1),
       (2, 'РТС', 'Робототехнические системы', 'Околов', 'Андрей', 'Ромуальдович', 1),
       (3, 'ЭАПУиТК', 'Электропривод и автоматизация промышленных установок и технологических комплексов', 'Павлюковец', 'Сергей', 'Анатольевич', 1),
       (4, 'ТФ', 'Техническая физика', 'Хорунжий', 'Игорь', 'Анатольевич', 1),
       (5, 'ВМ', 'Высшая математика', 'Щукин', 'Михаил', 'Владимирович', 1),
       (6, 'ТД', 'Таможенное дело', 'Голубцова', 'Елена', 'Станиславовна', 7),
       (7, 'ИЯ', 'Иностранные языки', 'Веремейчик', 'Ольга', 'Валерьевна', 7)



INSERT INTO public.specialties
VALUES (1, 'ПОИТ', 'Программное обеспечение информационных технологий', '1-40 01 01', 1),
       (2, 'ИСИТ', 'Информационные системы и технологии', '1-40 05 01', 1),
       (3, 'АТПП', 'Автоматизация технологических процессов и производств', '6-05-0713-04', 2),
       (4, 'РС', 'Робототехнические системы', '6-05-0713-05', 2),
       (5, 'ИМ', 'Инновационный менеджмент', '1-26 81 02', 6),
       (6, 'Менеджмент', 'Менеджмент', '1-26 80 04', 6)



INSERT INTO public.groups
VALUES (10701119, 30, 1),
       (10701219, 26, 1),
       (10701319, 28, 1),
       (10702119, 28, 2),
       (10702219, 24, 2)



INSERT INTO public.work_types
VALUES (1, 'Лекции'),
(2, 'Практич. и семинарские занятия'),
(3, 'Лабораторные занятия'),
(4, 'Курсовое проектирование'),
(5, 'Консультации'),
(6, 'Зачёты'),
(7, 'Экзамены'),
(8, 'Руководство аспирантами'),
(9, 'Дипломное проектирование'),
(10, 'ГЭК'),
(11, 'Учебные и произв. практики'),
(12, 'Руководство магистрантами'),
(13, 'Контрольные работы и РГР')