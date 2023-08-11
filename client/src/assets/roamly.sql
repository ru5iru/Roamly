CREATE TABLE user(
    user_id serial PRIMARY KEY,
    email text NOT NULL,
    password text NOT NULL,
    contact_no text,
    user_type text,
    firstName text,
    lastName text,
    verified boolean
);

CREATE TABLE advertisement(
    ad_id serial PRIMARY KEY,
    title text,
    description text,
    ad_media bytea,
    user_id integer REFERENCES user(user_id)
);
