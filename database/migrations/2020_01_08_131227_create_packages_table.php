<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePackagesTable extends Migration {

	public function up()
	{
		Schema::create('packages', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->string('name')->nullable();
			$table->string('slug')->nullable();
		});
	}

	public function down()
	{
		Schema::drop('packages');
	}
}