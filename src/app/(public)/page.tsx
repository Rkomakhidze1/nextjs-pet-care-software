import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <main className="bg-[#5DC9A8] min-h-screen flex flex-col xl:flex-row items-center justify-center gap-10">
        <Image
          src="/petsoft-preview.png"
          alt="Preview of PetSoft"
          width={519}
          height={472}
        />

        <div>
          <h1 className="text-5xl font-semibold my-6 max-w-[500px]">
            Manage your <span className="font-extrabold">pet daycare</span> with
            ease
          </h1>
          <p className="text-2xl font-medium max-w-[600px]">
            Use PetSoft to easily keep track of pets under your care. Get
            lifetime access for $299.
          </p>
          <div className="mt-10 space-x-3">
            <button>
              <Link href="/signup">Get started</Link>
            </button>
            <button>
              <Link href="/login">Log in</Link>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
