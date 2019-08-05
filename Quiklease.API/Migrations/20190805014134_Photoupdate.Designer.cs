﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Quiklease.API.Data;

namespace Quiklease.API.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20190805014134_Photoupdate")]
    partial class Photoupdate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.3-servicing-35854");

            modelBuilder.Entity("Quiklease.API.Models.Listing", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Address");

                    b.Property<string>("BuildingType");

                    b.Property<string>("Description");

                    b.Property<DateTime>("ExpiryDate");

                    b.Property<int>("Likes");

                    b.Property<string>("Phone");

                    b.Property<string>("PhotoUrl");

                    b.Property<DateTime>("PostedDate");

                    b.Property<decimal>("Price");

                    b.Property<DateTime>("RentFrom");

                    b.Property<DateTime>("RentUntil");

                    b.Property<int>("RoomsAvailable");

                    b.Property<string>("Title");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Listings");
                });

            modelBuilder.Entity("Quiklease.API.Models.Photo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DateAdded");

                    b.Property<bool>("IsMain");

                    b.Property<int>("ListingId");

                    b.Property<string>("PhotoUrl");

                    b.Property<string>("PublicId");

                    b.HasKey("Id");

                    b.HasIndex("ListingId");

                    b.ToTable("Photos");
                });

            modelBuilder.Entity("Quiklease.API.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("FullName");

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Quiklease.API.Models.Value", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("name");

                    b.HasKey("Id");

                    b.ToTable("Values");
                });

            modelBuilder.Entity("Quiklease.API.Models.Listing", b =>
                {
                    b.HasOne("Quiklease.API.Models.User", "User")
                        .WithMany("Listings")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Quiklease.API.Models.Photo", b =>
                {
                    b.HasOne("Quiklease.API.Models.Listing", "Listing")
                        .WithMany("Photos")
                        .HasForeignKey("ListingId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
