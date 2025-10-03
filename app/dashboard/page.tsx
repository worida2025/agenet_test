"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function DashboardPage() {
  const { user, logout, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Dashboard
              </h1>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 dark:text-gray-300 mr-4">
                {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome, {user.name}!
            </h2>
            <div className="grid gap-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  User Information
                </h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Email
                    </dt>
                    <dd className="text-sm text-gray-900 dark:text-white">
                      {user.email}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Role
                    </dt>
                    <dd className="text-sm text-gray-900 dark:text-white">
                      {user.role}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      User ID
                    </dt>
                    <dd className="text-sm text-gray-900 dark:text-white">
                      {user.id}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  PWA Features
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  This is a Progressive Web App. You can install it on your
                  device for a native app-like experience.
                </p>
                <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 list-disc list-inside">
                  <li>Works offline with service workers</li>
                  <li>Installable on desktop and mobile</li>
                  <li>Fast performance with caching</li>
                  <li>Push notifications support (can be added)</li>
                </ul>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Authentication
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  This app uses mock authentication with localStorage for
                  demonstration purposes. In production, replace this with a
                  secure authentication service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
