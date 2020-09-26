drop table if exists c_cards cascade;

create table c_cards (
  uuid character(36) not null
  , problem_url character varying(2048) not null
  , code text not null
  , comment text not null
  , solved_flag boolean not null
  , created_at timestamp not null
  , updated_at timestamp not null
  , constraint c_cards_PKC primary key (uuid)
);

drop table if exists c_submission_urls cascade;

create table c_submission_urls (
  uuid character(36) not null
  , cards_uuid character(36) not null
  , submission_url character varying(2048) not null
  , created_at timestamp not null
  , updated_at timestamp not null
  , constraint c_submission_urls_PKC primary key (uuid)
);

drop table if exists c_tags cascade;

create table c_tags (
  uuid character(36) not null
  , cards_uuid character(36) not null
  , tag_name text not null
  , created_at timestamp not null
  , updated_at timestamp not null
  , constraint c_tags_PKC primary key (uuid)
);