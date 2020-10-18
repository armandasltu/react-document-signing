export const getInitials = (name: string) => {
  const fullName = name.split(' ');
  const first = fullName.shift() ?? '';
  const last = fullName.pop() ?? '';
  const initials = first.charAt(0) + last.charAt(0);

  return initials.toUpperCase();
};
