<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use PDOException;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /**
         * add necessary roles and permissions that you need
         * Below given some examples to follow.
         * This is a spatie permissions package
        */

        try {
            DB::beginTransaction();

            // $adminRole = Role::create(['name' => 'administrator']);
            // $moderatorRole = Role::create(['name' => 'moderator']);
            // $ownerRole = Role::create(['name' => 'owner']);
            // $clientRole = Role::create(['name' => 'client']);


        // $createPermission = Permission::create(['name' => 'create']);

        // // Administrator permissions
        // $adminRole->givePermissionTo($createPermission);


            DB::commit();
        } catch (PDOException $e) {
            DB::rollBack();

            dd($e->getMessage());
        }
    }
}
