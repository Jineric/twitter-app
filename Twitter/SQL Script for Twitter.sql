use twitterapp;

-- drop table user_connection;

-- drop table tweet;

-- drop table twitter_user;

create table twitter_user(twitter_user_id int not null primary key auto_increment, user_twitter_name varchar(60) not null,user_first_name varchar(60) not null,user_last_name varchar(60) not null,user_password varchar(60) not null,user_email_address varchar(60) not null, user_profile_photo varchar(100));
create table user_connection(user_connection_id int not null primary key auto_increment, user_connection_twitter_id int not null,user_connection_following varchar(60), user_connection_following_id int not null);
create table tweet(tweet_id int not null primary key auto_increment, tweet_user_id int not null,tweet_retweet_name varchar(60),tweet_content varchar(200) not null,tweet_create_date datetime not null);

alter table user_connection add constraint FK_user_connection_twitter_user foreign key (user_connection_twitter_id) references twitter_user (twitter_user_id);
alter table tweet add constraint FK_tweet_user foreign key (tweet_user_id) references twitter_user (twitter_user_id);

insert into twitter_user(twitter_user_id, user_twitter_name,user_first_name,user_last_name,user_password,user_email_address,user_profile_photo)
values
('1','Kenji','Eric','Baek','secret123','eric.baek@somewherehere.com',''),
('2','Lett','Jason','Minnow','secret123','jason.minnow@somewherehere.com',''),
('3','Candy','Clara','Thomson','secret123','clara.thomson@somewherehere.com',''),
('4','Soldier','Cloud','Strife','secret123','cloud.strife@somewherehere.com',''),
('5','Baron','Jim','Red','secret123','jim.red@somewherehere.com','');

insert into user_connection(user_connection_id,user_connection_twitter_id,user_connection_following, user_connection_following_id)values(1,'1','Lett', '2');
insert into user_connection(user_connection_id,user_connection_twitter_id,user_connection_following, user_connection_following_id)values(2,'1','Soldier', '4');
insert into user_connection(user_connection_id,user_connection_twitter_id,user_connection_following, user_connection_following_id)values(3,'1','Baron', '5');
insert into user_connection(user_connection_id,user_connection_twitter_id,user_connection_following, user_connection_following_id)values(4,'2','Kenji', '2');
insert into user_connection(user_connection_id,user_connection_twitter_id,user_connection_following, user_connection_following_id)values(5,'2','Candy', '3');
insert into user_connection(user_connection_id,user_connection_twitter_id,user_connection_following, user_connection_following_id)values(6,'2','Soldier', '4');
insert into user_connection(user_connection_id,user_connection_twitter_id,user_connection_following, user_connection_following_id)values(7,'3','Soldier', '4');
insert into user_connection(user_connection_id,user_connection_twitter_id,user_connection_following, user_connection_following_id)values(8,'4','Candy', '3');
insert into user_connection(user_connection_id,user_connection_twitter_id,user_connection_following, user_connection_following_id)values(9,'5','Kenji', '1');

insert into tweet(tweet_id,tweet_user_id,tweet_retweet_name,tweet_content,tweet_create_date)values(1,'1',null,'First tweet!','2017-12-15 20:01:55');
insert into tweet(tweet_id,tweet_user_id,tweet_retweet_name,tweet_content,tweet_create_date)values(2,'1',null,'Started a new project today; wish my luck!','2017/12/20 8:15:01');
insert into tweet(tweet_id,tweet_user_id,tweet_retweet_name,tweet_content,tweet_create_date)values(3,'1',null,'Snowboarding trip in Boston!','2018/02/9 11:00:15');
insert into tweet(tweet_id,tweet_user_id,tweet_retweet_name,tweet_content,tweet_create_date)values(4,'1',null,'Home made pizza is delicious~ YUM!','2018/02/24 19:33:05');
insert into tweet(tweet_id,tweet_user_id,tweet_retweet_name,tweet_content,tweet_create_date)values(5,'2',null,'Got a new job! Time to celebrate!','2018/02/01 12:01:35');
insert into tweet(tweet_id,tweet_user_id,tweet_retweet_name,tweet_content,tweet_create_date)values(6,'3',null,'First episode of My Hero Academia airs today!','2018/01/10 08:08:14');
insert into tweet(tweet_id,tweet_user_id,tweet_retweet_name,tweet_content,tweet_create_date)values(7,'4',null,'Starting the new year right','2018/01/01 08:10:10');
insert into tweet(tweet_id,tweet_user_id,tweet_retweet_name,tweet_content,tweet_create_date)values(8,'5',null,'Anyone want to watch the Black Panther with me?','2018/02/15 21:22:58');
insert into tweet(tweet_id,tweet_user_id,tweet_retweet_name,tweet_content,tweet_create_date)values(9,'2',null,'Happy new year! To new beginnings!','2018/01/01 00:01:55');
insert into tweet(tweet_id,tweet_user_id,tweet_retweet_name,tweet_content,tweet_create_date)values(10,'1','Lett','Happy new year! To new beginnings!','2018/01/01 00:01:55');