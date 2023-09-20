export const getMissingFields = (fields: Record<string, string | undefined>) => {
    return Object.entries(fields).flatMap(([key, value]) => (!value ? key : []));
};