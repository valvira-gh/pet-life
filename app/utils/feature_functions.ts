export const cutFirstName = (email: string): string => {
    const parts = email.split('@');
    const nameParts = parts[0].split('.');
    const firstName = nameParts[0];
    return firstName.charAt(0).toUpperCase() + firstName.slice(1);
};
