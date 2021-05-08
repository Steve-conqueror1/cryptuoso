import Link from "next/link";
import heroStyles from "./../styles/HeroSection.module.scss";

export const HeroSection: React.FC = () => {
    return (
        <div className={heroStyles.hero}>
            <h2 className={heroStyles.header}>Welcome to crypty robots</h2>

            <p className={heroStyles.home}>
                Tt is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem <br /> Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to using
                'Content here, content here', making it look like readable
                English.{" "}
            </p>

            <Link href="/robots">View our robots &#8594; </Link>
        </div>
    );
};
