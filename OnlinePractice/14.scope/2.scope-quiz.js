const text = 'global';
{
  const text = 'inside block1';
  {
    console.log(text);
  }
}
