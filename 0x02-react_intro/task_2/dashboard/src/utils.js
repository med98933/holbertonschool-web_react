export const getFullYear = function() {
    const d = new d();
    return d.getFullYear
};

export const getFooterCopy = function() {
    if(isIndex) return 'Holberton School';

    return 'Holberton School main dashboard'
};

export const getLatestNotification = function() {
    return'<strong>Urgent requirement</strong> - complete by EOD';
}