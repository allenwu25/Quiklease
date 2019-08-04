using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Quiklease.API.Migrations
{
    public partial class ExtendedListings : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "BuildingType",
                table: "Listings",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "RentFrom",
                table: "Listings",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "RentUntil",
                table: "Listings",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "RoomsAvailable",
                table: "Listings",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BuildingType",
                table: "Listings");

            migrationBuilder.DropColumn(
                name: "RentFrom",
                table: "Listings");

            migrationBuilder.DropColumn(
                name: "RentUntil",
                table: "Listings");

            migrationBuilder.DropColumn(
                name: "RoomsAvailable",
                table: "Listings");
        }
    }
}
