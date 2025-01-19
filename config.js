const {createClient} = supabase

const supabaseUrl = 'https://hheirodncynhgysuomny.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoZWlyb2RuY3luaGd5c3VvbW55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxODkyNTAsImV4cCI6MjA1Mjc2NTI1MH0.JS3o9zmR24xScvSuiuckEbnD8s490_ksyxaflzL9Dis'
const supabaseClient = createClient(supabaseUrl, supabaseKey)


window.supabase = supabaseClient 