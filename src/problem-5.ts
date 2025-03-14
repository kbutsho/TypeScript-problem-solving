enum UserRole {
    admin = "admin",
    editor = "editor",
    viewer = "viewer"
}

interface User {
    id: number;
    name: string;
    role: UserRole;
}

class AccessControl {
    private static permissions: Record<UserRole, string[]> = {
        [UserRole.admin]: ["create", "read", "update", "delete"],
        [UserRole.editor]: ["create", "read", "update"],
        [UserRole.viewer]: ["read"]
    };

    static hasPermission(user: User, action: string): boolean {
        return AccessControl.permissions[user.role]?.includes(action) ?? false;
    }
}

// Example Usage:
const user1: User = { id: 1, name: "Alice", role: UserRole.admin };
const user2: User = { id: 2, name: "Bob", role: UserRole.editor };
const user3: User = { id: 3, name: "Charlie", role: UserRole.viewer };

console.log(AccessControl.hasPermission(user1, "delete")); // true (admin)
console.log(AccessControl.hasPermission(user2, "delete")); // false (editor can't delete)
console.log(AccessControl.hasPermission(user3, "update")); // false (viewer can't update)
console.log(AccessControl.hasPermission(user3, "read")); // true (viewer can read)
