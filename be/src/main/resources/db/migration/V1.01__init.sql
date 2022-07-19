create
    or replace function uuid_generate_v4() returns uuid
    language sql as
$$
SELECT uuid_in(overlay(overlay(md5(random()::text || ':' || random()::text) placing '4' from 13) placing
                       to_hex(floor(random() * (11 - 8 + 1) + 8)::int)::text from 17)::cstring);
$$;

create table employee
(
    id         uuid        not null primary key default uuid_generate_v4(),
    name       varchar(64) not null,
    salary     decimal         not null,
    created_at timestamp   not null             default now(),
    updated_at timestamp   not null             default now()
);
