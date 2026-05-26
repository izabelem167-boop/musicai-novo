create table songs (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id),
  prompt text,
  style text,
  audio_url text,
  personagem text,
  created_at timestamp default now()
);

alter table songs enable row level security;

create policy "users can see own songs"
on songs for select using (auth.uid() = user_id);

create policy "users can insert own songs"
on songs for insert with check (auth.uid() = user_id);
